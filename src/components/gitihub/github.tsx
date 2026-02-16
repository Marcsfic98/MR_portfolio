import React, { useEffect, useState } from "react";
import { FaCode, FaFolder } from "react-icons/fa";
import { fetchGitHubStats, type GitHubStatsData } from "../../services/github";
import Counter from "./Counter"; // Importe o componente que criamos acima
import "./github.css";

const GitHubStats: React.FC = () => {
  const [stats, setStats] = useState<GitHubStatsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubStats().then((data) => {
      setStats(data);
      setLoading(false);
    });
  }, []);

  if (loading)
    return <div className="loading-text">Carregando métricas...</div>;

  return (
    <section className="github-stats-section">
      <div className="stats-container">
        {/* Card do LinkedIn - Valor Fixo 1000+ */}
        <div className="stat-card glass">
          <span className="stat-icon">🔗</span>
          <div className="stat-info">
            <h3 className="stat-value">
              <Counter end={1000} suffix="+" />
            </h3>
            <p className="stat-label">Conexões no Linkedin</p>
          </div>
        </div>

        {/* Card de Commits - Dinâmico */}
        <div className="stat-card glass">
          <span className="stat-icon">
            <FaCode />
          </span>
          <div className="stat-info">
            <h3 className="stat-value">
              {stats && <Counter end={stats.totalCommits} />}
            </h3>
            <p className="stat-label">Commits realizados</p>
          </div>
        </div>

        {/* Card de Repositórios - Dinâmico */}
        <div className="stat-card glass">
          <span className="stat-icon">
            <FaFolder />
          </span>
          <div className="stat-info">
            <h3 className="stat-value">
              {stats && <Counter end={stats.repoCount} />}
            </h3>
            <p className="stat-label">Repositórios públicos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;
