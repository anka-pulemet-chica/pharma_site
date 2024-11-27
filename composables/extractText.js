export function extractText(dataArray) {
  return dataArray
    .map((data) => {
      if (data.type === 'list' && data.children) {
        return data.children
          .map((child) => {
            return `
              <div class="ls-item">
                ${child.children
                  .map(
                    (c) =>
                      `<img src="/images/components/li.svg" style="position: relative; padding-right: 15px; top: 10px;"/><span style="color: #8B8B8B; line-height: 2;">${c.text}</span>`
                  )
                  .join('')}
              </div>
            `;
          })
          .join('');
      }
      return ''; // Если элемент не является списком, возвращаем пустую строку
    })
    .join(''); // Объединяем все элементы списка в одну строку
}