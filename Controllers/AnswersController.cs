using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using johndoeoverflow.models;

namespace johndoeoverflow.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AnswersController : ControllerBase
  {
    private DatabaseContext db;
    public AnswersController()
    {
      this.db = new DatabaseContext();
    }

    // Answer a question, POST
    [HttpPost("{QuestionId}")]
    public ActionResult<Answer> AnswerAQuestion([FromBody]Answer answer, int? QuestionId)
    {
      var question = db.Questions.FirstOrDefault(f => f.Id == QuestionId);
      question.Answers.Add(answer);
      db.SaveChanges();
      return answer;
    }

    // Up/Down vote an answer, PUT
    [HttpPut("voteA/{id}")]
    public ActionResult<Answer> VoteAnAnswer(int id, [FromBody]Answer oldCount)
    {
      var newCount = db.Answers.FirstOrDefault(f => f.Id == id);
      newCount.VoteCount = oldCount.VoteCount;
      db.SaveChanges();
      return newCount;
    }
  }
}