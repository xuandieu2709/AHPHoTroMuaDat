using AHPHoTroMuaDat.Data;
using AHPHoTroMuaDat.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace AHPHoTroMuaDat.Controllers
{
    public class DatAHPController : Controller
    {
        private readonly MVCDemoDbContext _context;
        public DatAHPController(MVCDemoDbContext context)
        {
            _context = context;
        }
        // GET: Land

        //Thừa nè!!!
        public IActionResult Index()
        {
            // Get all criteria from the database
            var criteria = _context.Criteria.ToList();
            var land = _context.Land.ToList();
            var viewmodel = new SearchCriteriaViewModel()
            {
                Criterias = criteria,
                Lands = land
            };

            // Pass the criteria to the view
            return View(viewmodel);
        }

        //Thừa nè!!!
        [HttpPost]
        public IActionResult Filter(int[] criteriaIds)
        {

            var land = _context.Land
                .Where(l => l.LandCriterias.Any(lc => criteriaIds.Contains(lc.CriteriaId)))
                .ToList();

            // Pass the filtered land to the view
            return PartialView("_LandList", land);
        }



        //Controller lấy từ dưới đây nha, bên trên là controller thừa, ở dưới đây là controller của view Index2.cshtml,
        //view Index.cshtml với _LandList.cshtml trong DatAHP là thừa


        //Lấy code này nha !!!  của trang index2.cshtml
        public IActionResult Index2()
        {
            var criteria = _context.Criteria.ToList();
            int pageSize = 6; // Number of records per page
            var lands = _context.Land
                .OrderBy(l => l.LandId)
                .Take(pageSize)
                .ToList();

            var viewmodel = new SearchCriteriaViewModel()
            {
                Criterias = criteria,
                Lands = lands
            };

            return View(viewmodel);
        }





        //Lấy code này nha !!!   của trang index2.cshtml
        [HttpGet]
        public IActionResult FilteredAndPaginatedData(string criteria, int page = 1)
        {
            int pageSize = 6; // Number of records to load per page
            List<int> selectedCriteria = new List<int>();

            if (!string.IsNullOrEmpty(criteria))
            {
                selectedCriteria = JsonConvert.DeserializeObject<List<int>>(criteria);
            }

            var query = _context.Land.AsQueryable();

            if (selectedCriteria.Count > 0)
            {
                query = query.Where(land =>
                    _context.LandCriteria
                        .Where(landCriteria => selectedCriteria.Contains(landCriteria.CriteriaId))
                        .Any(landCriteria => landCriteria.LandId == land.LandId))
                    .AsQueryable();
            }

            var totalRecords = query.Count();
            var totalPages = (int)Math.Ceiling((double)totalRecords / pageSize);

            List<Land> paginatedLands = query
                .OrderBy(l => l.LandId)
                .Skip((page - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            var result = new
            {
                lands = paginatedLands,
                totalPages = totalPages,
                currentPage = page
            };

            return Json(result);
        }

    }
}
