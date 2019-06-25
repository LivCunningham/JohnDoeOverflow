using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using johndoeoverflow.models;

namespace johndoeoverflow.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class QuestionsController : ControllerBase
  {
    private DatabaseContext db;
    public QuestionsController()
    {
      this.db = new DatabaseContext();
    }
    // Search questions asked, GET
    [HttpGet]
    public ActionResult<List<Question>> GetQuestions()
    {
      return Ok();
    }

    // View an individual question, GET
    [HttpGet("{id}")]
    public ActionResult<Question> GetAQuestion()
    {
      return Ok();
    }

    // Create a new question, POST
    [HttpPost]
    public ActionResult<Question> PostAQuestion()
    {
      return Ok();
    }

    // Answer a question, PUT
    [HttpPut("{id}")]
    public ActionResult<Answer> Answer()
    {
      return Ok();
    }

    // Up/Down vote a question, PUT
    [HttpPut]
    public ActionResult<Question> VoteAQuestion()
    {
      return Ok();
    }

    // Up/Down vote an answer, PUT
    [HttpPut]
    public ActionResult<Answer> VoteAnAnswer()
    {
      return Ok();
    }
  }
}