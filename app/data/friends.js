// ===============================================================================
// DATA
// Below data will hold all friends
// Initially we just set it equal to a "dummy" friend.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
    {
        "name": "Nima",
        "photo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Kermit_the_Frog.jpg/220px-Kermit_the_Frog.jpg",
        "scores": ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]
    },
    {
        "name": "David",
        "photo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Kermit_the_Frog.jpg/220px-Kermit_the_Frog.jpg",
        "scores": ["4", "2", "3", "5", "4", "1", "3", "5", "4", "1"]
    },
    {
        "name": "Stacey",
        "photo": "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Kermit_the_Frog.jpg/220px-Kermit_the_Frog.jpg",
        "scores": ["5", "1", "4", "5", "4", "1", "2", "5", "4", "1"]
    }
];

// export array for use in other files using require
module.exports = friendArray;