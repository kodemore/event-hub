// List of 50 pets objects

class Pet {
    constructor(id, name, breed) {
        this.id = id;
        this.name = name;
        this.breed = breed;
    }
    get type() {
        if (this.breed[0].toLowerCase() < 'h') {
            return 'Event';
        } else {
            return 'Service';
        }
    }

    get title() {
        return `${this.name} (${this.breed})`;
    }
}

export const pets = [
    new Pet(1, 'Max', 'Golden Retriever'),
    new Pet(2, 'Charlie', 'Labrador'),
    new Pet(3, 'Buddy', 'Dachshund'),
    new Pet(4, 'Oscar', 'Beagle'),
    new Pet(5, 'Milo', 'Poodle'),
    new Pet(6, 'Archie', 'Rottweiler'),
    new Pet(7, 'Ollie', 'Boxer'),
    new Pet(8, 'Toby', 'German Shepherd'),
    new Pet(9, 'Jack', 'Pug'),
    new Pet(10, 'Teddy', 'Chihuahua'),
    new Pet(11, 'Bella', 'Labrador'),
    new Pet(12, 'Lucy', 'Golden Retriever'),
    new Pet(13, 'Luna', 'Poodle'),
    new Pet(14, 'Daisy', 'Beagle'),
    new Pet(15, 'Lola', 'German Shepherd'),
    new Pet(16, 'Sadie', 'Yorkshire Terrier'),
    new Pet(17, 'Molly', 'Bulldog'),
    new Pet(18, 'Bailey', 'Boxer'),
    new Pet(19, 'Stella', 'Dachshund'),
    new Pet(20, 'Maggie', 'Pug'),
    new Pet(21, 'Chloe', 'Rottweiler'),
    new Pet(22, 'Sophie', 'Chihuahua'),
    new Pet(23, 'Lily', 'Pomeranian'),
    new Pet(24, 'Nala', 'Border Collie'),
    new Pet(25, 'Zoey', 'Corgi'),
    new Pet(26, 'Coco', 'Australian Shepherd'),
    new Pet(27, 'Ruby', 'Great Dane'),
    new Pet(28, 'Rosie', 'Doberman'),
    new Pet(29, 'Gracie', 'Siberian Husky'),
    new Pet(30, 'Penny', 'Cavalier King Charles'),
    new Pet(31, 'Duke', 'Shih Tzu'),
    new Pet(32, 'Dexter', 'Boston Terrier'),
    new Pet(33, 'Winston', 'Maltese'),
    new Pet(34, 'Bear', 'French Bulldog'),
    new Pet(35, 'Zeus', 'Pomeranian'),
    new Pet(36, 'Lucky', 'Miniature Schnauzer'),
    new Pet(37, 'Bentley', 'English Springer Spaniel'),
    new Pet(38, 'Riley', 'Pembroke Welsh Corgi'),
    new Pet(39, 'Harley', 'Vizsla'),
    new Pet(40, 'Murphy', 'Brittany'),
]
