export const log = (message: string) => {
  const trackingObject = {
    message: message,
    occuredAt: Date.now(),
  };

  console.log(trackingObject);
};
