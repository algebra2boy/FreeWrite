import localForage from "localforage";

// Set the name of the database
localForage.config({
    name: "Editor",
    description: "store editor content in local forage"
});

export const loadContent = async () => {
    try {
        const content = await localForage.getItem('editorContent');
        return content;
    } catch (error) {
        console.error('Failed to load editor content:', error);
    }
};

export const saveContent = async (content) => {
    try {
        await localForage.setItem('editorContent', content);
    } catch (error) {
        console.error('Failed to save editor content:', error);
        return null;
    }
};