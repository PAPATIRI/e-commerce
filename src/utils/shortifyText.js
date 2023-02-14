export default function shortifyName(fullname) {
  if (fullname.length != 0) {
    const first = fullname.split(' ');
    return first[0];
  }
  return '';
}
