// 1. Enum สำหรับสถานะของ Course
enum CourseStatus {
  Open = "Open",
  Closed = "Closed",
  Full = "Full",
}

// 2. Interface สำหรับ Student
interface Student {
  name: string;
  id: number;
}

// 3. Interface สำหรับ Course
interface Course {
  title: string;
  code: string;
  status: CourseStatus;
  students: Student[];
}

// 4. ฟังก์ชัน enroll: เพิ่มนักเรียนเข้าคอร์ส เฉพาะเมื่อสถานะเป็น 'Open'
function enroll(student: Student, course: Course): void {
  if (course.status !== CourseStatus.Open) {
    console.log(
      `Cannot enroll ${student.name}: Course "${course.title}" is ${course.status}.`
    );
    return;
  }

  course.students.push(student);
  console.log(`${student.name} has been enrolled in "${course.title}".`);
}

// --- ตัวอย่างการใช้งาน / ทดสอบ ---
const student1: Student = { name: "Somchai", id: 101 };
const student2: Student = { name: "Suda", id: 102 };
const student3: Student = { name: "Anan", id: 103 };

const course1: Course = {
  title: "Introduction to TypeScript",
  code: "CS301",
  status: CourseStatus.Open,
  students: [],
};

const course2: Course = {
  title: "Advanced Databases",
  code: "CS401",
  status: CourseStatus.Closed,
  students: [],
};

enroll(student1, course1); // สำเร็จ: course1 เป็น Open
enroll(student2, course1); // สำเร็จ: course1 ยังเป็น Open
enroll(student3, course2); // ไม่สำเร็จ: course2 เป็น Closed

console.log(course1);
console.log(course2);