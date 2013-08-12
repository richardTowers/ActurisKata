using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Project;
using System.Linq;
using System.Collections.Generic;

namespace GameTests
{
	[TestClass]
	public class UnitTest1
	{
		[TestMethod]
		public void TestCanCreateGame()
		{
			var game = new Game();
			Assert.IsNotNull(game);
		}

		[TestMethod]
		public void TestCanRollBall()
		{
			var game = new Game();
			game.Roll(8);
		}

		[TestMethod]
		public void TestTwentyZeroGame()
		{
			var game = new Game();

			RunGame(game, Enumerable.Repeat(0, 20));

			Assert.AreEqual(0, game.GetScore());
		}

		[TestMethod]
		public void TestTwentyOnesGame()
		{
			var game = new Game();

			RunGame(game, Enumerable.Repeat(1, 20));

			Assert.AreEqual(20, game.GetScore());
		}

		[TestMethod]
		public void TestFirstScoreStrikeThenZeros()
		{
			var game = new Game();

			var scores = new [] { 10 }.Concat(Enumerable.Repeat(0, 18));

			RunGame(game, scores);

			Assert.AreEqual(10, game.GetScore());
		}

		[TestMethod]
		public void TestPerfectGame()
		{
			var game = new Game();

			var scores = Enumerable.Repeat(10, 11);


		}

		private void RunGame(Game game, IEnumerable<int> rollScores)
		{
			foreach (var rollScore in rollScores)
			{
				game.Roll(rollScore);
			}
		}

	}
}
