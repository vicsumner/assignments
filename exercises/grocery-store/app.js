var shopper = {
  id: 0020,
  firstName: "Bob",
  lastName: "Jenkins",
  isFrequentShopper: true,
  groceryCart: ["apples", "bread", "butter", "tea"],
  fullName: function () {
    return (shopper.firstName + " " + shopper.lastName);
  }
};
console.log(shopper.groceryCart);
console.log(shopper.fullName());
if (shopper.isFrequentShopper = true) {
  console.log("Thank you, for being a value customer.");
}
