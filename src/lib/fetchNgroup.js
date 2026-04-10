
// //  fetch analyzed games for a username

// export async function fetchGames(username) {
//     const response = await fetch(
//         `https://lichess.org/api/games/user/${username}?&analysed=true&accuracy=true`,
//         {
//             headers: {
//                 Accept: "application/x-ndjson",
//             },
//         },
//     );

//     if (!response.ok) {
//         throw new Error(`Failed to fetch games: ${response.status}`);
//     }

//     const ndjson = await response.text();
//     const games = ndjson
//         .trim()
//         .split("\n")
//         .map((line) => JSON.parse(line));

//     // Extract game IDs and accuracy data
//     const extractedData = games.map((game) => ({
//         id: game.id,
//         createdAt: game.createdAt,
//         winner: game.winner ?? "draw", 
//         white: {
//             user: game.players.white.user?.id,
//             rating: game.players.white.rating,
//             accuracy: game.players.white.analysis?.accuracy || null,
//         },
//         black: {
//             user: game.players.black.user?.id,
//             rating: game.players.black.rating,
//             accuracy: game.players.black.analysis?.accuracy || null,
//         },
//     }));

//     return extractedData;
// }







// group games by user's rating 
export function groupGamesByRating(games, username) {
    const groups = {};

    games.forEach((game) => {
        // Determine which side the user played
        let userRating;
        let userAccuracy;

        if (game.white.user?.toLowerCase() === username.toLowerCase()) {
            userRating = game.white.rating;
            userAccuracy = game.white.accuracy;
        } else if (
            game.black.user?.toLowerCase() === username.toLowerCase()
        ) {
            userRating = game.black.rating;
            userAccuracy = game.black.accuracy;
        } else {
            // User didn't play this game? Skip
            return;
        }

        // Group by rating
        if (!groups[userRating]) {
            groups[userRating] = [];
        }

        // In groupGamesByRating, bij de push:
        groups[userRating].push({
            id: game.id,
            rating: userRating,
            accuracy: userAccuracy,
            winner: game.winner ?? "draw",
            color: game.white.user?.toLowerCase() === username.toLowerCase() ? "white" : "black",
            date: game.createdAt,
            opponent: game.white.user?.toLowerCase() === username.toLowerCase()
                ? { name: game.black.user, rating: game.black.rating, accuracy: game.black.accuracy }
                : { name: game.white.user, rating: game.white.rating, accuracy: game.white.accuracy },
        });
    });

    return groups;
}







// find highest and lowest accuracy games for each rating group
export function findAccuracyExtremes(groupedGames) {
    const results = {};

    for (const rating in groupedGames) {
        const games = groupedGames[rating];

        // Filter out games without accuracy data
        const gamesWithAccuracy = games.filter(
            (game) => game.accuracy !== null,
        );

        if (gamesWithAccuracy.length === 0) {
            results[rating] = { highest: null, lowest: null };
            continue;
        }

        // Find highest accuracy
        const highest = gamesWithAccuracy.reduce((max, game) =>
            game.accuracy > max.accuracy ? game : max,
        );

        // Find lowest accuracy
        const lowest = gamesWithAccuracy.reduce((min, game) =>
            game.accuracy < min.accuracy ? game : min,
        );

        results[rating] = { highest, lowest };
    }

    return results;
}