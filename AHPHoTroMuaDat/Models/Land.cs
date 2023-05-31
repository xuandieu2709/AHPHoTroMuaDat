namespace AHPHoTroMuaDat.Models
{
    public class Land
    {
        public int LandId { get; set; }
        public string Area { get; set; }
        public string Price { get; set; }
        public string Location { get; set; }
        public string Users { get; set; }
        public string Phone { get; set; }
        public string Name { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string ImageUrl { get; set; }
        public string Link { get; set; }
        public ICollection<LandCriteria> LandCriterias { get; set; }
        

    }
}
