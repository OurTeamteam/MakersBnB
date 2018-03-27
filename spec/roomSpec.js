describe('Room', function(){
var room;
beforeEach(function(){
  room = new Room("My First Room", 50, "Large Room")
});


  describe('constructor', function(){
    it('is instantiated with a description', function(){
      expect(room.description).toBe("Large Room")
    });

    it('is instantiated with a price', function(){
      expect(room.pricePerNight).toEqual(50)
    });

    it('is instantiated with a name', function(){
      expect(room.name).toBe("My First Room")
    });
  });
});
