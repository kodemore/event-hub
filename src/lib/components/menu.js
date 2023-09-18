export class MenuItem {
    constructor(name, url, id = null) {
        this.name = name;
        this.url = url;
        this.id = id ? id : 'menu-item-' + name.replace(/\s/g, '-').toLowerCase();
        this.active = false
    }
}
