export const triggerStorageUpdate = () => {
  const event = new Event("storageUpdate");
  window.dispatchEvent(event);
  
};
