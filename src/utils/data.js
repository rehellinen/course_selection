/**
 *  data.js
 *  Create By rehellinen
 *  Create On 2018/12/26 14:21
 */

const getTotal = (index) => {
  let total = 0
  second[index].groups.forEach(item => {
    total += item.credit
  })
  return total
}

const second = [
  {
    fIndex: 0,
    groups: [
      { id: 1, name: '必修课', credit: 28 },
      { id: 2, name: '通识教育选修', credit: 16 },
    ]
  },
  {
    fIndex: 1,
    groups: [
      { id: 3, name: '必修课', credit: 42 },
      { id: 4, name: '选修', credit: 12.5 },
    ]
  },
  {
    fIndex: 2,
    groups: [
      { id: 5, name: '必修课', credit: 31 },
      { id: 6, name: '选修', credit: 25 },
    ]
  },
  {
    fIndex: 3,
    groups: [
      { id: 7, name: '自由', credit: 5.5 },
    ]
  }
]

const first = [
  { name: '通识教育课程', credit: getTotal(0) },
  { name: '基础教育课程', credit: getTotal(1) },
  { name: '专业教育课程', credit: getTotal(2) },
  { name: '自由学分', credit: 5.5 },
]

const third = [
  {
    gid: 1,
    courses: [
      { name: '必修已修 ', credit: 26},
      { name: '形势与政策', credit: 0},
    ]
  },
  {
    gid: 2,
    courses: [
      { name: '体育竞技', credit: 2},
      { name: '创新', credit: 6},
      { name: '高英', credit: 0},
      { name: '艺术素养', credit: 0},
      { name: '经管法', credit: 0},
    ]
  },
  {
    gid: 3,
    courses: [
      { name: '必修已修', credit: 42},
    ]
  },
  {
    gid: 4,
    courses: [
      { name: '电子技术群', credit: 2, need: 2},
      { name: '信号处理群', credit: 2.5, need: 2},
      { name: '计算机知识群', credit: 7, need: 4},
      { name: '通信群', credit: 2, need: 2},
    ]
  },
  {
    gid: 5,
    courses: [
      { name: '已修', credit: 21},
      { name: '毕业论文', credit: 0, need: 8},
      { name: '毕业实习', credit: 0, need: 2},
    ]
  },
  {
    gid: 6,
    courses: [
      { name: '通信知识群', credit: 8, need: 8},
      { name: '电子技术群', credit: 6, need: 6},
      { name: '计算机技术群', credit: 2, need: 2},
      { name: '专业设计知识群', credit: 4, need: 4},
      { name: '其他', credit: 3, need: 3},
    ]
  },
  {
    gid: 7,
    courses: [
      { name: 'oracle', credit: 0.5}
    ]
  },
]

export {first, second, third}
