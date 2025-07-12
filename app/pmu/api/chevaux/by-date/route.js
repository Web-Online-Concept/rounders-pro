import { NextResponse } from 'next/server';
import { deleteByDate } from '../../../lib/db';

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    
    if (!date) {
      return NextResponse.json(
        { error: 'Date requise' },
        { status: 400 }
      );
    }
    
    console.log(`🗑️ Suppression de tous les chevaux du ${date}`);
    
    const result = await deleteByDate(date);
    
    console.log(`✅ ${result.count} chevaux supprimés`);
    
    return NextResponse.json({
      success: true,
      message: `${result.count} chevaux supprimés pour la date ${date}`,
      deletedCount: result.count
    });
    
  } catch (error) {
    console.error('❌ Erreur lors de la suppression par date:', error);
    return NextResponse.json(
      { 
        error: 'Erreur lors de la suppression',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

export const runtime = 'nodejs';