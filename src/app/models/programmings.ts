export interface Programmings {
    status: string,
    name: string,
    date: Date,
    phone: string,
    paymentType: string,
    location: string
  }

export interface RescheduleProgrammingDTO {
  newAttendanceDate: Date | undefined,
  newAttendanceHour: String | undefined,
  attendanceCode: String;
}
