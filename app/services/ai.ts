export const getCharacterSummaryGeneratedByAi = async (
  characterName: string,
) => {
  const response = await fetch(`/api/chat?characterName=${characterName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return response
}
