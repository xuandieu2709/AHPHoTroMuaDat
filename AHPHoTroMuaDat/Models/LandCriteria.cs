namespace AHPHoTroMuaDat.Models
{
    public class LandCriteria
    {
        public int LandCriteriaId { get; set; }
        public int LandId { get; set; }
        public int CriteriaId { get; set; }
        public Land Land { get; set; }
        public Criteria Criteria { get; set; }
    }
}
