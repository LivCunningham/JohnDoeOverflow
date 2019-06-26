using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using johndoeoverflow.models;

namespace johndoeoverflow.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SearchController : ControllerBase
  {
    private DatabaseContext db;
    public SearchController()
    {
      this.db = new DatabaseContext();
    }

    // Get by searchterm
    [HttpGet]
    public ActionResult<List<Question>> GetBySearch([FromQuery] string searchTerm)
    {
      var rv = db.Questions.Where(w => w.Title.ToLower().Contains(searchTerm.ToLower()) || w.Description.ToLower().Contains(searchTerm.ToLower()));
      return rv.ToList();
    }
  }
}