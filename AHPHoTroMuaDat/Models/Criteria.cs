namespace AHPHoTroMuaDat.Models
{
    public class Criteria
    {
        public int CriteriaId { get; set; }
        public string Name { get; set; }
        public ICollection<LandCriteria> LandCriterias { get; set; }

    }
}
