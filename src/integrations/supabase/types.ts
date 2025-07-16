export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      artist_impact_metrics: {
        Row: {
          confidence_score: number | null
          id: string
          income_growth_percent: number | null
          repeat_buyers: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          confidence_score?: number | null
          id?: string
          income_growth_percent?: number | null
          repeat_buyers?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          confidence_score?: number | null
          id?: string
          income_growth_percent?: number | null
          repeat_buyers?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      artworks: {
        Row: {
          category: string | null
          complexity_rating: number | null
          created_at: string | null
          description: string | null
          id: string
          image_url: string | null
          material_cost: number | null
          medium: string | null
          revisions: number | null
          size: string | null
          skill_level: string | null
          time_spent_hours: number | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          category?: string | null
          complexity_rating?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          material_cost?: number | null
          medium?: string | null
          revisions?: number | null
          size?: string | null
          skill_level?: string | null
          time_spent_hours?: number | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          category?: string | null
          complexity_rating?: number | null
          created_at?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          material_cost?: number | null
          medium?: string | null
          revisions?: number | null
          size?: string | null
          skill_level?: string | null
          time_spent_hours?: number | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      educational_modules: {
        Row: {
          category: string | null
          content: string | null
          created_at: string | null
          estimated_read_time: number | null
          id: string
          language: string | null
          title: string | null
        }
        Insert: {
          category?: string | null
          content?: string | null
          created_at?: string | null
          estimated_read_time?: number | null
          id?: string
          language?: string | null
          title?: string | null
        }
        Update: {
          category?: string | null
          content?: string | null
          created_at?: string | null
          estimated_read_time?: number | null
          id?: string
          language?: string | null
          title?: string | null
        }
        Relationships: []
      }
      feedback_suggestions: {
        Row: {
          artwork_id: string | null
          created_at: string | null
          id: string
          message: string | null
          recommended_action: string | null
          suggestion_type: string | null
          user_id: string | null
        }
        Insert: {
          artwork_id?: string | null
          created_at?: string | null
          id?: string
          message?: string | null
          recommended_action?: string | null
          suggestion_type?: string | null
          user_id?: string | null
        }
        Update: {
          artwork_id?: string | null
          created_at?: string | null
          id?: string
          message?: string | null
          recommended_action?: string | null
          suggestion_type?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "feedback_suggestions_artwork_id_fkey"
            columns: ["artwork_id"]
            isOneToOne: false
            referencedRelation: "artworks"
            referencedColumns: ["id"]
          },
        ]
      }
      market_data: {
        Row: {
          average_price: number | null
          id: string
          last_updated: string | null
          medium: string | null
          region: string | null
          source: string | null
          style: string | null
        }
        Insert: {
          average_price?: number | null
          id?: string
          last_updated?: string | null
          medium?: string | null
          region?: string | null
          source?: string | null
          style?: string | null
        }
        Update: {
          average_price?: number | null
          id?: string
          last_updated?: string | null
          medium?: string | null
          region?: string | null
          source?: string | null
          style?: string | null
        }
        Relationships: []
      }
      portfolio_pages: {
        Row: {
          bio: string | null
          created_at: string | null
          featured_artwork_ids: string[] | null
          id: string
          page_url: string | null
          user_id: string | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          featured_artwork_ids?: string[] | null
          id?: string
          page_url?: string | null
          user_id?: string | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          featured_artwork_ids?: string[] | null
          id?: string
          page_url?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      pricing_reports: {
        Row: {
          artwork_id: string | null
          breakdown: Json | null
          confidence_score: number | null
          created_at: string | null
          id: string
          suggested_price: number | null
          underpricing_feedback: string | null
        }
        Insert: {
          artwork_id?: string | null
          breakdown?: Json | null
          confidence_score?: number | null
          created_at?: string | null
          id?: string
          suggested_price?: number | null
          underpricing_feedback?: string | null
        }
        Update: {
          artwork_id?: string | null
          breakdown?: Json | null
          confidence_score?: number | null
          created_at?: string | null
          id?: string
          suggested_price?: number | null
          underpricing_feedback?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pricing_reports_artwork_id_fkey"
            columns: ["artwork_id"]
            isOneToOne: false
            referencedRelation: "artworks"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          bio: string | null
          created_at: string | null
          full_name: string | null
          id: string
          language_preference: string | null
          location: string | null
        }
        Insert: {
          bio?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          language_preference?: string | null
          location?: string | null
        }
        Update: {
          bio?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          language_preference?: string | null
          location?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
