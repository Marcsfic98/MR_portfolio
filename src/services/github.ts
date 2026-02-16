export interface GitHubStatsData {
  repoCount: number;
  totalCommits: number;
}

const GITHUB_USERNAME = "Marcsfic98"; // Substitua pelo seu usuário

export const fetchGitHubStats = async (): Promise<GitHubStatsData> => {
  try {
    // 1. Busca dados do perfil para pegar o número de repositórios públicos
    const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!userRes.ok) throw new Error("Erro ao buscar usuário");
    const userData = await userRes.json();

    // 2. Busca o total de commits (em repositórios públicos)
    const commitRes = await fetch(
      `https://api.github.com/search/commits?q=author:${GITHUB_USERNAME}`,
      { headers: { Accept: "application/vnd.github.cloak-preview" } }
    );
    const commitData = await commitRes.json();

    return {
      repoCount: userData.public_repos || 0,
      totalCommits: commitData.total_count || 0
    };
  } catch (error) {
    console.error("Erro na API do GitHub:", error);
    return { repoCount: 0, totalCommits: 0 };
  }
};