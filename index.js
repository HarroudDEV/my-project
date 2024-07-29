// type User<T> = T extends {name: string} ? () => T : never;

// type m = {name: string};

// type worker = User<m>

// function displaying(): worker {
//     return function () {
//         return {name: 'user'}
//     }
// }

// typescript to use in the public function