export interface RescheduleProgrammingDTO {
    newAttendanceDate: Date | undefined,
    newAttendanceHour: String | undefined,
    attendanceCode: String;
  }

export interface EmailDTO {
  to: String,
  subject: String,
  text: String,
}