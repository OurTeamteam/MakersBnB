describe('User', function(){
  var user;
  beforeEach(function(){
  user = new User();
  })
  describe('constructor', function(){
    it('should be instantiated with an empty array', function(){
      user = new User;
      expect(user.rooms).toEqual([])
    });
  });

  describe('#addRoom', function(){
    it('can add room to list', function(){
      user.addRoom("room1");
      expect(user.rooms).toContain("room1")
    });
  });
});




// describe('MakersBnB', function(){
//  var bnb;
//
//   beforeEach(function() {
//     bnb = new MakersBnB();
//   });
//
//   describe('#viewAllRooms', function(){
//     it('shows list of rooms', function(){
//       expect(bnb.viewAllRooms()).toEqual(["room1", "room2"])
//     })
//
//   })
// });
