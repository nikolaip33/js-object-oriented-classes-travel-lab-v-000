class Driver {
  constructor(name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf() {
    return Date().getFullYear() - this.startDate.getFullYear()
  }
}
