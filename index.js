class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf() {
    return new Date().getFullYear() - this.startDate.getFullYear()
  }
}
