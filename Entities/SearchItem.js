
const Items = [
    {
        "id": "1",
        "title": "Harry Potter",
        "type": "person",
        "status": "Active now",
        "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
        "id": "2",
        "title": "Gobleton fire Folder",
        "type": "folder",
        "file_count": 12,
        "location": "Photos",
        "last_action": "Edited 12m ago"
    },
    {
        "id": "3",
        "title": "Dambaldore.jpg",
        "type": "file",
        "file_extension": "jpg",
        "location": "Photos/Assets",
        "last_action": "Edited 12m ago"
    },
    {
        "id": "4",
        "title": "Kristinge Karand",
        "type": "person",
        "status": "Active 2d ago",
        "avatar_url": "https://images.unsplash.com/photo-1494790108755-2616b612b6ad?w=100&h=100&fit=crop&crop=face"
    },
    {
        "id": "5",
        "title": "Hagrid-duffy_dog.avi",
        "type": "file",
        "file_extension": "avi",
        "location": "Videos",
        "last_action": "Added 12m ago"
    },
    {
        "id": "6",
        "title": "Mantras for success",
        "type": "folder",
        "file_count": 34,
        "location": "Work",
        "last_action": "Edited 3d ago"
    },
    {
        "id": "7",
        "title": "sandra_adaeze.png",  
        "type": "file",
        "file_extension": "png",
        "location": "Photos/Assets",
        "last_action": "Edited 5h ago"
    },{
        "id": "8",
        "title": "Sandra Adaeze",
        "type": "person",
        "status": "Active now",
        "avatar_url": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face"

    },
    {
        "id": "9",
        "title": "project_overview.mp4",
        "type": "file",
        "file_extension": "mp4",
        "location": "Videos",
        "last_action": "Edited 1d ago"
    },
    {
        "id": "10",
        "title": "Hermoiny Granger",
        "type": "person",
        "status": "Active 5h ago",
        "avatar_url": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face"
    },
    {
        "id": "11",
        "title": "Ron Weasley",
        "type": "person",
        "status": "Active 1h ago",
        "avatar_url": "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop&crop=face"
    },
    {
        "id": "12",
        "title": "Hermione's Notes.pdf",
        "type": "file",
        "file_extension": "pdf",
        "location": "Documents",
        "last_action": "Edited 2d ago"
    },
    {
        "id": "13",
        "title": "Hogwarts Tour.mp4",
        "type": "file",
        "file_extension": "mp4",
        "location": "Videos",
        "last_action": "Added 1h ago"
    },
    {
        "id": "14",
        "title": "Order of the Phoenix",
        "type": "folder",
        "file_count": 8,
        "location": "Groups",
        "last_action": "Edited 4d ago"
    },
    {
        "id": "15",
        "title": "Severus Snape",
        "type": "person",
        "status": "Active 3h ago",
        "avatar_url": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face"
    },
    {
        "id": "16",
        "title": "Hogsmeade Trip.jpg",
        "type": "file",
        "file_extension": "jpg",
        "location": "Photos/Trips",
        "last_action": "Edited 6h ago"
    },
    {
        "id": "17",
        "title": "Dobby",
        "type": "person",
        "status": "Active 10m ago",
        "avatar_url": "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=100&h=100&fit=crop&crop=face"
    },
    {
        "id": "18",
        "title": "Potions Class Notes.docx",
        "type": "file",
        "file_extension": "docx",
        "location": "Documents/Classes",
        "last_action": "Edited 1d ago"
    },
    {
        "id": "19",
        "title": "Gryffindor Common Room",
        "type": "folder",
        "file_count": 15,
        "location": "Houses",
        "last_action": "Edited 2h ago"
    },
    {
        "id": "20",
        "title": "Draco Malfoy",
        "type": "person",
        "status": "Active 7h ago",
        "avatar_url": "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face"
    },
    {
        "id": "21",
        "title": "Quidditch Match.mp4",
        "type": "file",
        "file_extension": "mp4",
        "location": "Videos/Sports",
        "last_action": "Added 3d ago"
    },
    {
        "id": "22",
        "title": "Marauder's Map.png",
        "type": "file",
        "file_extension": "png",
        "location": "Photos/Artifacts",
        "last_action": "Edited 8h ago"
    },
    {
        "id": "23",
        "title": "Luna Lovegood",
        "type": "person",
        "status": "Active 30m ago",
        "avatar_url": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face"
    },
    {
        "id": "24",
        "title": "Hogwarts Express",
        "type": "folder",
        "file_count": 5,
        "location": "Trips",
        "last_action": "Edited 1w ago"
    },
    {
        "id": "25",
        "title": "Sirius Black",
        "type": "person",
        "status": "Active 12h ago",
        "avatar_url": "https://images.unsplash.com/photo-1465101178521-c1a9136a3b41?w=100&h=100&fit=crop&crop=face"
    },
    {
        "id": "26",
        "title": "Defense Against Dark Arts.pdf",
        "type": "file",
        "file_extension": "pdf",
        "location": "Documents/Classes",
        "last_action": "Edited 2w ago"
    },
    {
        "id": "27",
        "title": "Hedwig.jpg",
        "type": "file",
        "file_extension": "jpg",
        "location": "Photos/Pets",
        "last_action": "Added 4d ago"
    },
    {
        "id": "28",
        "title": "Weasley Family",
        "type": "folder",
        "file_count": 9,
        "location": "People",
        "last_action": "Edited 2d ago"
    },
    {
        "id": "29",
        "title": "Hogsmeade Chat",
        "type": "chat",
        "participants": ["Harry Potter", "Ron Weasley", "Hermione Granger"],
        "last_message": "See you at Three Broomsticks!",
        "last_action": "Sent 10m ago"
    },
    {
        "id": "30",
        "title": "Dumbledore's Army Chat",
        "type": "chat",
        "participants": ["Harry Potter", "Hermione Granger", "Neville Longbottom"],
        "last_message": "Meeting tonight in Room of Requirement.",
        "last_action": "Sent 1h ago"
    }
]
export default Items;