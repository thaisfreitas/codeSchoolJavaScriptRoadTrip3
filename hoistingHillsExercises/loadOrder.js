function theBridgeOfHoistingDoom() {
  var sword = undefined;
  var fall = undefined;
  var ring = undefined;
  var dwarf = undefined;

  ring();
  function fellowship() {
    return "friends";
  };
  sword = "sting";
  dwarf = function() {
    return "axe";
  };
  fall = "Fly you fools!";
  fellowship = function() {
    return "broken";
  };
  fellowship = function() {
    return "mines"
  };
  sword = function() {
    return "glamdring";
  };
  ring = function() {
    return "precious";
  };
  return sword;
}
