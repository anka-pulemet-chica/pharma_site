// export function extractText(dataArray) {
//   return dataArray
//     .map((data) => {
//       if (data.type === 'list' && data.children) {
//         return data.children
//           .map((child) => {
//             return `
//               <div class="ls-item" >
//                 ${child.children
//                   .map(
//                     (c) =>
//                       `<div style="margin-top: 10px; position: static;"><img src="/images/components/li.svg" style="position: relative; padding-right: 15px; top: 10px;"/><span style="color: #8B8B8B; line-height: 1.5;">${c.text}</span></div>`
//                   )
//                   .join('')}
//               </div>
//             `;
//           })
//           .join('');
//       }
//       return ''; // Если элемент не является списком, возвращаем пустую строку
//     })
//     .join(''); // Объединяем все элементы списка в одну строку
// }


export function extractText(dataArray) {
  return dataArray
    .map((data) => {
      if (data.type === 'list' && data.children) {
        // Обработка списков
        return data.children
          .map((child) => {
            return `
              <div class="ls-item">
                ${child.children
                  .map(
                    (c) =>
                      `<div style="margin-top: 5px; position: static;">
                         <img src="/images/components/li.svg" style="position: relative; padding-right: 15px; top: 10px;" />
                         <span style="line-height: 1.5; font-weight: 200;">${c.text}</span>
                       </div>`
                  )
                  .join('')}
              </div>
            `;
          })
          .join('');
      } else if (data.type === 'paragraph' && data.children) {
        // Обработка параграфов
        return data.children
          .map((child) => child.text)
          .join('<br/>');
      }
      return ''; // Если элемент не является списком или параграфом, возвращаем пустую строку
    })
    .join('<br/>'); // Объединяем все элементы в одну строку
}