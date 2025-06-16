// JavaScript for Transfermarkt Player Profile

// Player Data (Easy to edit)
const playerData = {
    name: "Şevval Çabuk",
    number: 10,
    club: "Galatasaray SK",
    nationality: ["Türkiye"],
    birthDate: "15 Mar 2001",
    age: 24,
    birthPlace: "İstanbul",
    height: "1,68 m",
    position: "Sağ Kanat",
    foot: "Sağ ayak",
    marketValue: "2.50 mil. €",
    agent: "Çabuk Sports Management",
    contractStart: "1 Tem 2023",
    contractEnd: "30 Haz 2027",
    lastExtension: "15 Oca 2024",
    sponsor: "Yıldız Wear",
    nationalTeamCaps: 8,
    nationalTeamGoals: 3,
    socialMedia: {
        twitter: "#",
        facebook: "#",
        instagram: "#",
        tiktok: "#"
    }
};

// Market Value Chart Data
const marketValueData = {
    labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
    data: [0.2, 0.5, 1.0, 1.5, 2.0, 2.3, 2.5]
};

// National Team Data
const nationalTeamData = [
    { team: "Türkiye", debut: "12 Haz 2023", caps: 8, goals: 3 },
    { team: "Türkiye U21", debut: "15 Eyl 2022", caps: 12, goals: 7 },
    { team: "Türkiye U20", debut: "20 Ara 2021", caps: 15, goals: 9 },
    { team: "Türkiye U19", debut: "18 Eki 2020", caps: 18, goals: 12 },
    { team: "Türkiye U17", debut: "27 Tem 2019", caps: 20, goals: 14 },
    { team: "Türkiye U16", debut: "16 Haz 2018", caps: 4, goals: 1 }
];

// Performance Data
const performanceData = [
    { season: "24/25", club: "Galatasaray SK", league: "Süper Lig", matches: 28, goals: 12, assists: 8 },
    { season: "23/24", club: "Galatasaray SK", league: "Süper Lig", matches: 31, goals: 15, assists: 10 },
    { season: "22/23", club: "Fenerbahçe SK", league: "Süper Lig", matches: 26, goals: 8, assists: 6 },
    { season: "21/22", club: "İstanbul Başakşehir", league: "Süper Lig", matches: 22, goals: 5, assists: 4 },
    { season: "20/21", club: "Galatasaray Altyapı", league: "U19 Ligi", matches: 18, goals: 14, assists: 6 }
];

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeMarketValueChart();
    setupVotingSystem();
    setupInteractiveElements();
    setupDataEditing();
});

// Market Value Chart
function initializeMarketValueChart() {
    const ctx = document.getElementById('marketValueChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: marketValueData.labels,
            datasets: [{
                label: 'Piyasa Değeri (Milyon €)',
                data: marketValueData.data,
                borderColor: '#00b2ff',
                backgroundColor: 'rgba(0, 178, 255, 0.1)',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#00b2ff',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Piyasa Değeri Gelişimi'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Değer (Milyon €)'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Yıl'
                    },
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            elements: {
                point: {
                    hoverBackgroundColor: '#0099d4'
                }
            }
        }
    });
}

// Voting System
function setupVotingSystem() {
    const voteButtons = document.querySelectorAll('.vote-btn');
    voteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const playerName = this.textContent;
            
            // Visual feedback
            this.style.background = '#28a745';
            this.textContent = `✓ ${playerName}`;
            
            // Disable buttons temporarily
            voteButtons.forEach(btn => btn.disabled = true);
            
            // Show result
            setTimeout(() => {
                showVoteResult(playerName);
            }, 1000);
        });
    });
}

function showVoteResult(selectedPlayer) {
    const comparison = document.querySelector('.comparison');
    const resultDiv = document.createElement('div');
    resultDiv.className = 'vote-result';
    resultDiv.innerHTML = `
        <div class="result-message">
            <i class="fas fa-check-circle"></i>
            <p>Oyunuz kaydedildi: <strong>${selectedPlayer}</strong></p>
            <small>Teşekkürler!</small>
        </div>
    `;
    
    resultDiv.style.cssText = `
        background: #d4edda;
        border: 1px solid #c3e6cb;
        color: #155724;
        padding: 1rem;
        border-radius: 8px;
        margin-top: 1rem;
        text-align: center;
    `;
    
    comparison.appendChild(resultDiv);
    
    // Reset after 3 seconds
    setTimeout(() => {
        resultDiv.remove();
        const voteButtons = document.querySelectorAll('.vote-btn');
        voteButtons.forEach((btn, index) => {
            btn.disabled = false;
            btn.style.background = '#00b2ff';
            btn.textContent = index === 0 ? 'Şevval Çabuk' : 'Kerem Aktürkoğlu';
        });
    }, 3000);
}

// Interactive Elements
function setupInteractiveElements() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects to performance table rows
    const performanceRows = document.querySelectorAll('.performance-table tr');
    performanceRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // Add click animation to achievement items
    const achievementItems = document.querySelectorAll('.achievement-item');
    achievementItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.2s ease';
            
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // National team items hover effect
    const nationalTeamItems = document.querySelectorAll('.national-team-item');
    nationalTeamItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.borderLeftWidth = '8px';
            this.style.transition = 'border-left-width 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.borderLeftWidth = '4px';
        });
    });
}

// Data Editing Functions (For easy customization)
function updatePlayerData(newData) {
    Object.assign(playerData, newData);
    refreshPlayerInfo();
}

function refreshPlayerInfo() {
    // Update player name
    const playerNameElements = document.querySelectorAll('.player-name');
    playerNameElements.forEach(el => el.textContent = playerData.name);
    
    // Update player number
    const playerNumberElement = document.querySelector('.player-number');
    if (playerNumberElement) {
        playerNumberElement.textContent = `#${playerData.number}`;
    }
    
    // Update market value
    const marketValueElement = document.querySelector('.market-value .value');
    if (marketValueElement) {
        marketValueElement.textContent = playerData.marketValue;
    }
    
    // Update other info fields
    updateInfoField('Anavatandaki isim:', playerData.name);
    updateInfoField('Doğum tarihi/Yaş:', `${playerData.birthDate} (${playerData.age})`);
    updateInfoField('Boy:', playerData.height);
    updateInfoField('Mevki:', playerData.position);
    updateInfoField('Ayak:', playerData.foot);
    updateInfoField('Temsilci:', playerData.agent);
    updateInfoField('Sözleşme tarihi:', playerData.contractStart);
    updateInfoField('Sözleşme süresi:', playerData.contractEnd);
    updateInfoField('Son sözleşme uzatma:', playerData.lastExtension);
    updateInfoField('Donatıcı:', playerData.sponsor);
}

function updateInfoField(label, value) {
    const infoRows = document.querySelectorAll('.info-row');
    infoRows.forEach(row => {
        const labelElement = row.querySelector('.label');
        if (labelElement && labelElement.textContent === label) {
            const valueElement = row.querySelector('.value');
            if (valueElement) {
                valueElement.textContent = value;
            }
        }
    });
}

// Setup data editing interface
function setupDataEditing() {
    // Add edit buttons (hidden by default, can be shown for editing)
    if (window.location.hash === '#edit') {
        enableEditMode();
    }
}

function enableEditMode() {
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit Player Data';
    editButton.className = 'edit-btn';
    editButton.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #e74c3c;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        z-index: 1000;
    `;
    
    editButton.addEventListener('click', openEditModal);
    document.body.appendChild(editButton);
}

function openEditModal() {
    const modal = document.createElement('div');
    modal.className = 'edit-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>Edit Player Data</h2>
            <form id="editForm">
                <label>Name: <input type="text" name="name" value="${playerData.name}"></label>
                <label>Number: <input type="number" name="number" value="${playerData.number}"></label>
                <label>Market Value: <input type="text" name="marketValue" value="${playerData.marketValue}"></label>
                <label>Age: <input type="number" name="age" value="${playerData.age}"></label>
                <label>Height: <input type="text" name="height" value="${playerData.height}"></label>
                <label>Position: <input type="text" name="position" value="${playerData.position}"></label>
                <button type="submit">Update</button>
                <button type="button" onclick="this.closest('.edit-modal').remove()">Cancel</button>
            </form>
        </div>
    `;
    
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    `;
    
    modal.querySelector('.modal-content').style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 8px;
        width: 90%;
        max-width: 500px;
    `;
    
    modal.querySelector('form').style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 1rem;
    `;
    
    modal.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const newData = {};
        for (let [key, value] of formData.entries()) {
            newData[key] = value;
        }
        updatePlayerData(newData);
        modal.remove();
    });
    
    document.body.appendChild(modal);
}

// Performance statistics calculator
function calculateCareerStats() {
    const totalMatches = performanceData.reduce((sum, season) => sum + season.matches, 0);
    const totalGoals = performanceData.reduce((sum, season) => sum + season.goals, 0);
    const totalAssists = performanceData.reduce((sum, season) => sum + season.assists, 0);
    
    return {
        totalMatches,
        totalGoals,
        totalAssists,
        goalsPerMatch: (totalGoals / totalMatches).toFixed(2),
        assistsPerMatch: (totalAssists / totalMatches).toFixed(2)
    };
}

// Export functions for external use
window.PlayerProfile = {
    updatePlayerData,
    refreshPlayerInfo,
    calculateCareerStats,
    playerData,
    performanceData,
    nationalTeamData
};

// Console log for developers
console.log('Transfermarkt Player Profile loaded successfully!');
console.log('Use PlayerProfile.updatePlayerData() to modify player information');
console.log('Add #edit to URL to enable edit mode');
console.log('Current player: Şevval Çabuk - Galatasaray SK');
