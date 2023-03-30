export const getUser = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          name: 'Nguyen Van Nam',
          age: 23,
          address: 'Vinh Phuc'
        },
        status: 200
      })
    }, 1500)
  })
