export const sleepForXSeconds = async (seconds: number, loggerFunction: Function): Promise<void> => {
  loggerFunction(`start sleep for ${seconds} seconds`);
  await new Promise(f => setTimeout(f, seconds * 1000));
  loggerFunction(`finished sleep for ${seconds} seconds`);
};

export const sayHello = () => { console.log('Hello'); };