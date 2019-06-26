using System;
using System.Collections.Generic;

namespace johndoeoverflow.models
{
  public class Question
  {
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime DatePosted { get; set; } = DateTime.Now;
    public int VoteCount { get; set; } = 0;
    public List<Answer> Answers { get; set; }
  }
}