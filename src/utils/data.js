/**
 *  data.js
 *  Create By rehellinen
 *  Create On 2018/12/26 14:21
 */

const first = [
  { name: '通识教育课程', credit: 44 },
  { name: '基础教育课程', credit: 56.5 },
  { name: '专业教育课程', credit: 44 }
]

const second = [
  {
    fIndex: 0,
    groups: [
      { name: '必修课', credit: 28 },
      { name: '通识教育选修', credit: 16 },
    ]
  }
]

const third = [
  {
    gIndex: 0,
    courses: [
      { name: '近代史', credit: 2},
      { name: '大英 I', credit: 4},
      { name: '大语', credit: 2},
      { name: '体育 I', credit: 1},
      { name: '思修', credit: 3},
      { name: '大英 II', credit: 4},
      { name: '体育 II', credit: 1},
      { name: '毛概（上）', credit: 3},
      { name: '毛概（下）', credit: 3},
      { name: '马原', credit: 3},
    ]
  },
  {
    gIndex: 1,
    courses: [
      { name: '体育竞技', credit: 2},
      { name: '创新', credit: 6},
      { name: '高英', credit: 0},
      { name: '艺术素养', credit: 0},
      { name: '经管法', credit: 0},
    ]
  }
]

export {first, second, third}
