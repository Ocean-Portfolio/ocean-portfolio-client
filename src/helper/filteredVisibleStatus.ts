interface Data {
  visible_status: string;
}

export const filteredVisibleStatus = <P extends Data>(data: P[]) => {
  return data.filter((elem) => elem.visible_status !== 'NONE');
};
