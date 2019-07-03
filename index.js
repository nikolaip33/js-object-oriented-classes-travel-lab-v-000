class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf() {
    console.log(new Date().getFullYear())
    return new Date().getFullYear() - this.startDate.getFullYear()
  }
}
