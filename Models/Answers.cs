using System;

namespace johndoeoverflow.models
{
  public class Answer
  {
    public int Id { get; set; }
    public string Description { get; set; }
    public int VoteCount { get; set; } = 0;
    public DateTime DatePosted { get; set; }
    public int? QuestionId { get; set; }
    public Question Question { get; set; }
  }
}