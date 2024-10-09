export function useUsers() {
  const getSeverity = (status: string) => {
    const statusMap: { [key: string]: string } = {
      admin: "success",
      moderator: "info",
    };

    return statusMap[status];
  };

  return { getSeverity };
}
