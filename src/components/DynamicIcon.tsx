import {
  Monitor, BarChart3, HeartPulse, Palette, Microscope, Wrench,
  BookOpen, Dumbbell, Smartphone, Scale, Sprout, Plane,
  Trophy, Landmark, Briefcase, Leaf, Waves, Medal, Music, Mic,
  Globe, Bot, Code, Rocket, Newspaper, Video, Camera, Film,
  FileText, Shield, Calculator, Atom, FlaskConical, Star, Compass,
  Mountain, Sun, Home, TrendingUp, Building2, Award, PenTool,
  Image, Gamepad2, Brain, Heart, Scissors, Megaphone, Paintbrush,
  Bug, Printer, Share2, Flag, Swords, Ship, Music2, Flower2,
  Dna, Handshake, Languages, Telescope, Fish, Puzzle, Clapperboard,
  MountainSnow, Activity, HelpCircle,
  type LucideProps,
} from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";

type LucideIcon = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;

/** Maps emoji strings used in data files to Lucide icon components */
const EMOJI_TO_ICON: Record<string, LucideIcon> = {
  // Interest categories
  "💻": Monitor,
  "📊": BarChart3,
  "🏥": HeartPulse,
  "🎨": Palette,
  "🔬": Microscope,
  "⚙️": Wrench,
  "📚": BookOpen,
  "⚽": Dumbbell,
  "📱": Smartphone,
  "⚖️": Scale,
  "🌱": Sprout,
  "✈️": Plane,

  // Extracurricular categories & activities
  "🎭": Clapperboard,
  "🏛️": Landmark,
  "💼": Briefcase,
  "🏊": Waves,
  "🏅": Medal,
  "🎵": Music,
  "🎤": Mic,
  "🌍": Globe,
  "🤝": Handshake,
  "📖": BookOpen,
  "🤖": Bot,
  "🚀": Rocket,
  "📰": Newspaper,
  "🎬": Clapperboard,
  "🎙️": Mic,
  "📈": TrendingUp,
  "🌻": Flower2,

  // Extended extracurriculars
  "🧮": Calculator,
  "⚛️": Atom,
  "🧪": FlaskConical,
  "🧬": Dna,
  "🌟": Star,
  "📝": FileText,
  "💃": Music2,
  "🖼️": Image,
  "✍️": PenTool,
  "🥋": Swords,
  "🎮": Gamepad2,
  "🧘": Activity,
  "📲": Share2,
  "🗣️": Languages,
  "🔐": Shield,
  "🖨️": Printer,
  "🎥": Video,

  // Additional extracurriculars
  "🏆": Award,
  "🔭": Telescope,
  "🧗": MountainSnow,
  "⚔️": Swords,
  "🚣": Ship,
  "♟️": Brain,
  "🏺": Palette,
  "🎶": Music2,
  "👗": Scissors,
  "🛸": Rocket,
  "🏠": Home,
  "⚜️": Compass,
  "🖌️": Paintbrush,
  "📷": Camera,
  "🎞️": Film,
  "🧩": Puzzle,
  "🏢": Building2,
  "📣": Megaphone,
  "🐝": Bug,
  "🐋": Fish,
  "☀️": Sun,
  "🌿": Leaf,
};

interface DynamicIconProps extends LucideProps {
  /** Emoji string from data files, mapped to a Lucide icon */
  name: string;
}

/**
 * Renders a Lucide icon based on an emoji string key.
 * Falls back to HelpCircle if the emoji is not mapped.
 */
export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const Icon = EMOJI_TO_ICON[name] ?? HelpCircle;
  return <Icon {...props} />;
}
