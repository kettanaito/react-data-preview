export default function getValueExcerpt(value) {
  if (typeof value === 'string') return `"${value}"`;
  if (typeof value === 'boolean') return `${value}`;
  if (typeof value === 'function') return `${value.name || 'fn'}()`;
  if (Array.isArray(value)) return `Array[${value.length}]`;
  if (value instanceof Object) return '{…}';
  if (!isNaN(value)) return value;

  return 'null';
}