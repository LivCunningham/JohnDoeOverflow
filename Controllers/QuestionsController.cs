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
    // **** This is where you will filter each question individually by the search bar
    // **** Should be a query to filter down list
    [HttpGet]
    public ActionResult<List<Question>> GetQuestions()
    {
      var rv = db.Questions;
      return rv.ToList();
    }

    // View an individual question, GET
    [HttpGet("{id}")]
    public ActionResult<Question> GetAQuestion(int id)
    {
      var question = db.Questions.Find(id);
      return question;
    }

    // Create a new question, POST
    [HttpPost]
    public ActionResult<Question> PostAQuestion([FromBody]Question question)
    {
      db.Questions.Add(question);
      db.SaveChanges();
      return question;
    }

    // Answer a question, PUT
    [HttpPut("{id}")]
    public ActionResult<Answer> Answer()
    {
      return Ok();
    }

    // Up/Down vote a question, PUT
    [HttpPut("voteQ/{id}")]
    public ActionResult<Question> VoteAQuestion(int id, [FromBody]Question oldCount)
    {
      var newCount = db.Questions.FirstOrDefault(f => f.Id == id);
      newCount.VoteCount = oldCount.VoteCount;
      db.SaveChanges();
      return newCount;
    }

    // Up/Down vote an answer, PUT
    [HttpPut("voteAnswer/{id}")]
    public ActionResult<Answer> VoteAnAnswer()
    {
      return Ok();
    }
  }
}