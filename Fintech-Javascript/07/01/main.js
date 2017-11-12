// Array.prototype.forEach.call(document.body.querySelectorAll('*[data-mask]'), applyDataMask)
//
// function applyDataMask(field) {
//   const mask = field.dataset.mask.split('');
//
//   function stripMask(maskedData) {
//     function isDigit(char) {
//       return /\d/.test(char);
//     }
//     return maskedData.split('').filter(isDigit);
//   }
//
//   function applyMask(data) {
//     return mask.map(function(char) {
//       if (char !== '_') {
//         return char;
//       }
//       if (data.length === 0) {
//         return char;
//       }
//
//       return data.shift();
//     }).join('');
//   }
//
//   function reapplyMask(data) {
//     return applyMask(stripMask(data));
//   }
//
//   function changed() {
//     const oldStart = field.selectionStart;
//     const oldEnd = field.selectionEnd;
//
//     field.value = reapplyMask(field.value);
//
//     field.selectionStart = oldStart;
//     field.selectionEnd = oldEnd;
//   }
//
//   field.addEventListener('click', changed);
//   field.addEventListener('keyup', changed);
// }
//
// alert('hello');
