
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Plus, Settings, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";

const integrations = [
  {
    id: "mercadolivre",
    name: "Mercado Livre",
    description: "Conecte sua loja do Mercado Livre para sincronizar pedidos e estoque",
    logo: "ML",
    color: "#FFE600",
    bgColor: "bg-yellow-500/10",
    connected: true,
    accounts: [
      {
        name: "Loja Principal ML",
        id: "123456789",
        status: "active",
        lastSync: "há 2 minutos"
      }
    ]
  },
  {
    id: "shopee",
    name: "Shopee",
    description: "Integre com a Shopee para gerenciar suas vendas no Sudeste Asiático",
    logo: "S",
    color: "#EE4D2D",
    bgColor: "bg-orange-500/10",
    connected: false,
    accounts: [],
    blocked: true
  },
  {
    id: "magalu",
    name: "Magalu Marketplace",
    description: "Conecte à plataforma de marketplace do Magazine Luiza",
    logo: "MG",
    color: "#0066CC",
    bgColor: "bg-blue-500/10",
    connected: false,
    accounts: [],
    comingSoon: true
  },
  {
    id: "amazon",
    name: "Amazon",
    description: "Integre com a Amazon Brasil para expandir seu alcance",
    logo: "A",
    color: "#FF9900",
    bgColor: "bg-amber-500/10",
    connected: false,
    accounts: [],
    comingSoon: true
  }
];

export default function Integrations() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Integrações</h1>
          <p className="text-muted-foreground mt-1">
            Conecte e gerencie suas integrações de marketplace.
          </p>
        </div>
        <Button 
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          disabled
        >
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Integração
        </Button>
      </div>

      {/* Aviso de limitação do plano */}
      <Card className="bg-card border-border border-dashed">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <AlertCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Limitações do Plano Básico</h3>
                <p className="text-sm text-muted-foreground">
                  Você pode conectar apenas 1 conta de 1 marketplace. Para conectar múltiplas contas e marketplaces, faça upgrade para Pro.
                </p>
              </div>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              Upgrade para Pro
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Integração Ativa */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Integração Ativa</h2>
        
        {integrations.filter(integration => integration.connected).map((integration) => (
          <Card key={integration.id} className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${integration.bgColor} rounded-lg flex items-center justify-center`}>
                    <span 
                      className="font-bold text-lg"
                      style={{ color: integration.color }}
                    >
                      {integration.logo}
                    </span>
                  </div>
                  <div>
                    <CardTitle className="text-foreground flex items-center gap-2">
                      {integration.name}
                      <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Conectado
                      </Badge>
                    </CardTitle>
                    <CardDescription>{integration.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Switch defaultChecked />
                  <Button variant="outline" size="icon" className="border-border">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {integration.accounts.map((account, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border border-border"
                  >
                    <div>
                      <p className="font-medium text-foreground">{account.name}</p>
                      <p className="text-xs text-muted-foreground">
                        ID: {account.id} • Última sincronização: {account.lastSync}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                        Ativo
                      </Badge>
                      <Button variant="ghost" size="sm" className="text-primary">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Gerenciar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Integrações Disponíveis */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">Integrações Disponíveis</h2>
        
        <div className="grid gap-4 md:grid-cols-2">
          {integrations.filter(integration => !integration.connected).map((integration) => (
            <Card key={integration.id} className="bg-card border-border border-dashed">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 ${integration.bgColor} rounded-lg flex items-center justify-center`}>
                      <span 
                        className="font-bold text-lg"
                        style={{ color: integration.color }}
                      >
                        {integration.logo}
                      </span>
                    </div>
                    <div>
                      <CardTitle className="text-foreground flex items-center gap-2">
                        {integration.name}
                        {integration.comingSoon && (
                          <Badge variant="secondary" className="text-xs">
                            Em Breve
                          </Badge>
                        )}
                        {integration.blocked && (
                          <Badge variant="destructive" className="text-xs">
                            Bloqueado
                          </Badge>
                        )}
                      </CardTitle>
                      <CardDescription>{integration.description}</CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full border-border"
                  disabled={integration.comingSoon || integration.blocked}
                >
                  {integration.comingSoon 
                    ? "Em Breve" 
                    : integration.blocked 
                      ? "Upgrade para Pro" 
                      : "Conectar Agora"
                  }
                </Button>
                {integration.blocked && (
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    Você já tem uma integração ativa. Upgrade para Pro para conectar múltiplos marketplaces.
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
