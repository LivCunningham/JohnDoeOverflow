using System;
using System.Collections.Generic;
using System.Linq;

namespace johndoeoverflow.models
{
  public class Question
  {
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime DatePosted { get; set; } = DateTime.Now;
    public int VoteCount { get; set; } = 0;
    public List<Answer> Answers { get; set; } = new List<Answer>();
  }
}