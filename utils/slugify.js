export function process(value) {
    return value == undefined ? '' : value.replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
}