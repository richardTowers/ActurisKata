using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Project
{
	public class Game
	{
		private List<int> _rollScores = new List<int>();

		public void Roll(int rollScore)
		{
			this._rollScores.Add(rollScore);
		}

		public int GetScore()
		{
			var totalScore = 0;
			var framesSoFar = 0;
			var isFirstRoll = true;	

			foreach (var rollScore in this._rollScores)
			{
				totalScore += rollScore;

				if (rollScore == 10)
				{
					// Strike
					framesSoFar++;
					isFirstRoll = true;
					continue;
				}

				isFirstRoll = !isFirstRoll;
				if (!isFirstRoll)
				{
					framesSoFar++;
				}
			}

			if (framesSoFar != 10)
			{
				throw new Exception("Game not over");
			}
			return totalScore;
		}
	}
}
