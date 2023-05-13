interface CardData {
    title: string,
    flavorText: string,
    tools: string[]
}

interface CardList {
    data: Record<string, CardData>
}

const CARD_DATA: CardList = {
    data: {
        "game-dev": {
            title: "Game Dev",
            flavorText: "I like to create a stunning visual worlds that push the boundaries of imagination. Currently want to focus on the Technical Artist Path, but also open for the Generalist Role",
            tools: [
                "Unity", 'C#', 'C++', 'Blender', 'Java'
            ]
        },
        "front-end": {
            title: "Front-End",
            flavorText: "Creating mesmerizing UI with dynamic animation are part of my style",
            tools: [
                "React", 'PUG', 'Figma', 'HTML', 'CSS', 'SASS', 'THREE.JS', 'GLSL'
            ]
        },
        "back-end": {
            title: "Back-End",
            flavorText: "I like to maintain code from behind the scene. While i'm not very good at this. I can still do the basic",
            tools: [
                "Golang", 'Python', 'PHP', 'MySQL', 'Postgresql'
            ]
        }
    }
}

export default CARD_DATA;