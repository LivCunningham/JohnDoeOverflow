using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
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
    public ActionResult<Answer> AnswerAQuestion([FromBody]Answer answer, [FromRoute]int? QuestionId)
    {
      var question = db.Questions.FirstOrDefault(f => f.Id == QuestionId);
      question.Answers.Add(answer);
      db.SaveChanges();
      return answer;
    }

    //filtering through question Id to retrieve the answers for those questions. 
    [HttpGet("{QuestionId}")]
    public ActionResult<List<Answer>> AnswerAQuestion(int? QuestionId)
    {
      var question =
      db.Questions.Include(i => i.Answers).FirstOrDefault(x => x.Id == QuestionId);

      var AnswerList = question.Answers;
      return AnswerList.ToList();
    }

    // // Up/Down vote an answer, PUT
    // [HttpPut("voteA/{id}")]
    // public ActionResult<Answer> VoteAnAnswer(int id, [FromBody]Answer oldCount)
    // {
    //   var newCount = db.Answers.FirstOrDefault(f => f.Id == id);
    //   newCount.VoteCount = oldCount.VoteCount;
    //   db.SaveChanges();
    //   return newCount;
    // }
  }
}