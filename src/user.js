function User(){
  this.rooms = [];
};

User.prototype.addRoom = function(room){
  this.rooms.push(room);
};
